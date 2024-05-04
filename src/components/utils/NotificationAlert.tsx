import React, { FC, JSX } from "react";
import { TypeNotification } from "@/types/model";
import { Alert, Snackbar } from "@mui/material"

type PropNotification = {
    notify: TypeNotification
    setNotify: React.Dispatch<React.SetStateAction<TypeNotification>>
}

const NotificationAlert: FC<PropNotification> = ({ notify, setNotify }): JSX.Element => {
    return (
        <div>
            <Snackbar open={notify.isOpen} 
            autoHideDuration={3000} 
            onClose={() => setNotify({...notify, isOpen: false })}>
                <Alert
                    onClose={() => setNotify({...notify, isOpen: false })}
                    severity = {notify.type}
                    variant="filled"
                    sx={{ width: "100%" }}
                >
                    {notify.message}
                </Alert>
            </Snackbar>
        </div>
    );
};

export default NotificationAlert;
