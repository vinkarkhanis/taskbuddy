export const AddTask = ({ tasklist, setTasklist }) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        const task = e.target.task.value;
        const date = new Date();
        if (task) {
            setTasklist([...tasklist, { id: date.getTime(), name: task, time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}` }]);
            e.target.reset();
        }
    }
    return (
        <section className="addTask">
            <form onSubmit={handleSubmit}>
                <input type="text" name="task" placeholder="add task" autoComplete="off" maxLength="25" />
                <button type="submit">Add</button>
            </form>
        </section>
    )
}
