import { TodoItem } from "@/types/model";

export const getPendingTasks = (tasks: TodoItem[]) => {
    return tasks.filter((item: TodoItem) => !item.isCompleted).length
}

export const getFormattedDate = () => {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    
    const currentDate = new Date();
    const monthName = months[currentDate.getMonth()];
    const day = currentDate.getDate();
    
    let suffix = "th";
    if (day === 1 || day === 21 || day === 31) {
        suffix = "st";
    } else if (day === 2 || day === 22) {
        suffix = "nd";
    } else if (day === 3 || day === 23) {
        suffix = "rd";
    }
    
    return `${monthName} ${day}${suffix}`;
} 