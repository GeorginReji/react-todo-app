interface TodoItem {
    id: number
    task: string
    isCompleted: boolean
    editable: boolean
}
interface TypeNotification {
    isOpen: boolean
    type: 'error' | 'warning' | 'success'
    message: string
}

interface TypeConfirmDialog {
    isOpen: boolean
    title: string
    description: string
    onConfirm: () => void
}

export  type { TodoItem, TypeNotification, TypeConfirmDialog }