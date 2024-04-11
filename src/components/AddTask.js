export const AddTask = ({ tasklist, setTasklist, task, setTask }) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        const date = new Date();
        if (task.id) {
            const updatedTaskList = tasklist.map((item) => (item.id === task.id ? { ...item, name: task.name, time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}` } : item));
            setTasklist(updatedTaskList);
            setTask({});
        } else {
            const task = e.target.task.value;
            if (task) {
                setTasklist([...tasklist, { id: date.getTime(), name: task, time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}` }]);
                setTask({});
            }

        }
    }
    return (
        <section className="addTask">
            <form onSubmit={handleSubmit}>
                <input type="text" name="task" value={task.name || ""} placeholder="add task" autoComplete="off" maxLength="25" onChange={e => setTask({ ...task, name: e.target.value })} />
                <button type="submit">{task.id ? "Update": "Add"}</button>
            </form>
        </section>
    )
}
