const tasksList = JSON.parse(tasks)
const taskslistContainer = document.querySelector(".tasks")
printTasks = () => {

    taskslistContainer.innerHTML = "";
    tasksList.forEach((task) => {
        taskslistContainer.innerHTML += `
        <div class="col mb-4">
            <div class="card h-100 shadow">
                <div class="card-head p-3 d-flex justify-content-between">
                    <span class="bg-info text-white px-2 py-1 rounded">Task</span>
                    <div class="">
                        <i class="bi bi-bookmark pe-2" role="button"></i>
                        <i class="bi bi-three-dots-vertical" role="button"></i>
                    </div>
                </div>
                <div class="card-body p-4 d-flex flex-column">
                    <img src=${task.image} class="card-img-top border p-1" style="object-fit: cover" alt="book">
                    <h2 class="card-title text-center my-3">${task.taskName}</h2>
                    <p class="m-0">${task.description}</p>
                    
                    <div class="float-left mb-3 mt-auto">
                        <hr>
                        <i class="bi bi-exclamation-triangle-fill"></i>
                        <span>Priority level: </span>
                        <span class="btn text-white btn-success importance p-1 rounded priorityBtn" role="button">${task.importance}</span>
                    </div>
                    <div class="float-left">
                        <i class="bi bi-calendar3"></i>
                        <span>Deadline: </span>
                        <span>${task.deadline}</span>
                    </div>
                    <div class="text-end">
                        <hr>
                        <button class="btn btn-danger">
                            <i class="bi bi-trash"></i>
                            Delete
                        </button>
                        <button class="btn btn-success">
                            <i class="bi bi-check-circle"></i>
                            Done
                        </button>
                    </div>
                </div>
            </div>
        </div>
            `
    });
};

printTasks()
const increasePriority = () => {
    const priorityBtn = document.querySelectorAll(".priorityBtn")
    priorityBtn.forEach((btn, i) => {
        btn.addEventListener("click", () => {
            tasksList[i].importance++
            btn.innerHTML = tasksList[i].importance
            if (tasksList[i].importance <= 2) {
                console.log("importance is med: " + tasksList[i].importance)
                btn.classList.remove("btn-danger", "btn-success")
                btn.classList.add("btn-warning")
            } else if (tasksList[i].importance >= 3) {
                console.log("importance danger!: " + tasksList[i].importance)
                btn.classList.remove("btn-warning", "btn-success")
                btn.classList.add("btn-danger")
            }
            if (tasksList[i].importance == 6) {
                tasksList[i].importance = 0
                btn.innerHTML = tasksList[i].importance
                btn.classList.remove("btn-warning", "btn-danger")
                btn.classList.add("btn-success")
            }
        })
    })
}

increasePriority()

const sortTasks = () => {
    console.log("sort button clicked")
}