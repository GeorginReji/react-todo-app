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

export  type { TodoItem, TypeNotification }