import Task from "../models/Task";

export const renderTask = async (req, res) => {
  const tasks = await Task.find().lean();

  res.render("index", { tasks: tasks });
};

export const createTask = async (req, res) => {
  try {
    const task = Task(req.body);

    await task.save();

    res.redirect("/");
  } catch (error) {
    console.log(error);
  }
};

export const renderEditTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id).lean();

    res.render("edit", { task: task });
  } catch (error) {
    console.log(error.messsage);
  }
};

export const deleteTask = async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);

  res.redirect("/");
};

export const editTask = async (req, res) => {
  await Task.findByIdAndUpdate(req.params.id, req.body);

  res.redirect("/");
};

export const toggleDoneTask = async (req, res) => {
  const task = await Task.findById(req.params.id);

  task.done = !task.done;
  await task.save();

  res.redirect("/");
};
