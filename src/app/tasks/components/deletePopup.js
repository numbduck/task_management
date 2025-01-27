"use client";
import { deleteTask } from "@/store/slices/crud";
import { closeDeletePopup } from "@/store/slices/modals";
import { Button, Modal } from "@mantine/core";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";

export default function DeletePopUp() {
    const dispatch = useDispatch()
    const popup = useSelector((state) => state.modal.deletePopup)
    console.log(popup, "popup")

    const handleClose = () => {
        dispatch(closeDeletePopup())
    };

    const handleDelete = () => {
        dispatch(deleteTask(popup.helperData))
        handleClose();
    };
    return (
        <Modal
            closeOnClickOutside={false}
            opened={popup?.status}
            onClose={handleClose}
            withCloseButton={true}
            centered
            classNames={{
                content: "!rounded-lg",
            }}
            overlayProps={{
                blur: 3,
            }}
        >
            <div className="h-full w-full p-4 flex flex-col items-center gap-y-4">

                <Image src={'/assets/icons/warning.svg'} className="" height={40} width={40} alt="warning icon" />

                <p className="text-sm font-medium text-shadow-gray text-center">
                    Are you sure you want to delete {popup?.helperData?.task_title}
                </p>
            </div>
            <div className="flex justify-end gap-x-4">
                <Button
                    // className={`${
                    //   value === "" ? "opacity-50 cursor-none" : "opacity-0 cursor-pointer"
                    // }`}
                    onClick={handleDelete}
                >
                    Yes
                </Button>
                <Button
                    // className={`${
                    //   value === "" ? "opacity-50 cursor-none" : "opacity-0 cursor-pointer"
                    // }`}
                    onClick={handleClose}
                >
                    No
                </Button>
            </div>

        </Modal>
    );
}
