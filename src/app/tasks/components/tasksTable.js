import { openCreateTaskPopup, openDeletePopup } from '@/store/slices/modals';
import { Table } from '@mantine/core';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';

function TasksTable() {
    const dispatch = useDispatch();
    const tableData = useSelector((state) => state.crud.tasksData)

    console.log(tableData, "tableDtaa")

    const elements = [
        { position: 6, mass: 12.011, symbol: 'C', name: 'Carbon' },
        { position: 7, mass: 14.007, symbol: 'N', name: 'Nitrogen' },
        { position: 39, mass: 88.906, symbol: 'Y', name: 'Yttrium' },
        { position: 56, mass: 137.33, symbol: 'Ba', name: 'Barium' },
        { position: 58, mass: 140.12, symbol: 'Ce', name: 'Cerium' },
    ];

    const handleEdit = (id) => {
        dispatch(openCreateTaskPopup({ type: 'edit', ...id }))
    }
    const handleDelete = (id) => {
        dispatch(openDeletePopup(id))
        console.log(id)
    }

    const rows = tableData.map((element) => (
        <tr key={element.id}>
            <td>{element.task_title}</td>
            <td>{element.task_description}</td>
            <td className={`${element.task_priority === 'High' ? 'text-red-500' : element.task_priority === 'Medium' ? 'text-blue-500' : 'text-green-500'}`} >{element.task_priority}</td>
            <td>{element.due_date}</td>
            <td className='flex gap-x-3'><Image
                src="/assets/icons/edit.svg"
                height={16}
                width={16}
                alt="Edit"
                className="cursor-pointer"
                onClick={(e) => { e.stopPropagation(); handleEdit(element) }}
            />
                <Image
                    src="/assets/icons/delete.svg"
                    height={16}
                    width={16}
                    alt="Delete"
                    className="cursor-pointer"
                    onClick={() => handleDelete(element)}
                /></td>
        </tr>
    ));

    if (tableData?.length === 0) return <div className='flex flex-col items-center'><img src='/assets/images/noData.svg' alt='no_data' /><p>No Tasks added.</p></div>

    return (
        <Table highlightOnHover width={1200}>
            <thead>
                <tr>
                    <th>Task Title</th>
                    <th>Description</th>
                    <th>Priority</th>
                    <th>Due Date</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>{rows}</tbody>
        </Table>
    );

}

export default TasksTable
