import { addTask, updateTask } from "@/store/slices/crud";
import { closeCreateTaskPopup } from "@/store/slices/modals";
import { Button, Modal, Select, TextInput } from "@mantine/core";
import { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

function CreateTaskPopup() {
    const dispatch = useDispatch();
    const { control, reset, handleSubmit, formState: { errors }, clearErrors, setValue } = useForm({
        defaultValues: {
            task_title: "",
            task_description: "",
            due_date: null,
            task_priority: null
        }
    });
    const popup = useSelector((state) => state.modal.createTaskPopup);
    // const checkedData = useSelector((state) => state.common.folderData);

    const handleClose = () => {
        clearErrors();
        dispatch(closeCreateTaskPopup());
        reset();

    };
    console.log(popup, "popup")
    const onSubmit = (data) => {
        // console.log(data, "form data")
        const newData = { ...data, id: Date.now() }
        const newEditData = { ...data, id: popup?.helperData?.id }
        if (popup?.helperData?.type === 'edit') {
            dispatch(updateTask({ id: popup?.helperData?.id, updatedData: data }))
        } else {
            dispatch(addTask(newData))
        }

        handleClose();
    }
    useEffect(() => {
        if (popup?.helperData?.type === 'edit') {
            setValue('task_title', popup?.helperData?.task_title);
            setValue('task_description', popup?.helperData?.task_description);
            setValue('task_priority', popup?.helperData?.task_priority);
            setValue('due_date', popup?.helperData?.due_date)
        }
    }, [popup?.status])

    return (
        <Modal
            closeOnClickOutside={true}
            overlayProps={{
                blur: 1,
                opacity: 0.4,
            }}
            size="60rem"
            withCloseButton={true}
            opened={popup?.status}
            onClose={handleClose}
            centered
            classNames={{
                body: "bg-white",
                content: "!rounded-lg",
            }}
        >
            <div className="flex flex-col gap-y-6 p-1 md:p-2">
                <div className="flex justify-between">
                    <div className="flex flex-col gap-x-2 p-2 md:p-0">
                        <h1 className="text-primary-gray flex items-center font-semibold text-lg">
                            {popup?.helperData?.type === 'edit' ? 'Edit Task' : 'Create Task'}
                        </h1>
                    </div>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="grid grid-cols-2 gap-4">

                        <div>
                            <Controller
                                name="task_title"
                                control={control}
                                rules={{ required: 'Task title cannot be empty' }}
                                render={({ field }) => (
                                    <TextInput
                                        {...field}
                                        withAsterisk
                                        placeholder="Enter task title"
                                        error={errors?.task_title?.message}
                                        label='Task Title'
                                        defaultValue=""
                                        classNames={{
                                            input:
                                                "!rounded-md md:!h-[3rem] placeholder:!text-placeholder !text-base !text-primary-login",
                                        }}
                                    />
                                )}
                            />
                        </div>
                        <div>
                            <Controller
                                name="task_description"
                                control={control}
                                // rules={{ required: 'Task description cannot be empty' }}
                                render={({ field }) => (
                                    <TextInput
                                        {...field}
                                        // withAsterisk
                                        placeholder="Enter task description"
                                        label='Task Description'
                                        defaultValue=""
                                        classNames={{
                                            input:
                                                "!rounded-md md:!h-[3rem] placeholder:!text-placeholder !text-base !text-primary-login",
                                        }}
                                    />
                                )}
                            />
                        </div>
                        <div>
                            <Controller
                                name="task_priority"
                                control={control}
                                render={({ field }) => (
                                    <Select
                                        {...field}
                                        placeholder="Choose Priority"
                                        data={['High', 'Medium', 'Low']}
                                        label='Priority'
                                        defaultValue=""
                                        classNames={{
                                            input:
                                                "!rounded-md md:!h-[3rem] placeholder:!text-placeholder !text-base !text-primary-login",
                                            dropdown: "!text-primary-login",
                                        }}
                                    />
                                )}
                            />
                        </div>
                        <div>
                            <Controller
                                name="due_date"
                                control={control}
                                render={({ field }) => (
                                    <div className="flex flex-col">
                                        <label
                                            htmlFor="due_date"
                                            className="text-sm font-medium text-primary-login mb-1"
                                        >
                                            Due Date
                                        </label>
                                        <input
                                            type="date"
                                            min={new Date().toISOString().split("T")[0]}
                                            {...field}
                                            id="due_date"
                                            placeholder="Select Due Date"
                                            className="!rounded-md md:!h-[3rem] placeholder:!text-placeholder !text-base !text-primary-login border border-gray-300 px-3"
                                        />
                                    </div>
                                )}
                            />
                        </div>
                    </div>
                    <div className="mt-10 md:mt-4">
                        <Button
                            // className={`${
                            //   value === "" ? "opacity-50 cursor-none" : "opacity-0 cursor-pointer"
                            // }`}
                            // onClick={handleClick}
                            type="submit"
                        >
                            {popup?.helperData?.type === 'edit' ? 'SAVE' : 'CREATE'}
                        </Button>
                    </div>
                </form>
            </div>
        </Modal>
    );
}

export default CreateTaskPopup;
