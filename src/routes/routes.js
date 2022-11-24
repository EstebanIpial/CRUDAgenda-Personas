import { Router } from "express";
import Task from "../models/Task";
//Importa controladores para Tareas
import {
  renderTask,
  createTask,
  deleteTask,
  renderEditTask,
  editTask,
  toggleDoneTask,
} from "../controllers/taskController";
//Importa controladores para Personas
import {
  renderPerson,
  createPerson,
  deletePerson,
  renderEditPerson,
  editPerson
} from "../controllers/personController";

const router = Router();

//Tareas

router.get("/", renderTask);
router.post("/tasks/add", createTask);
router.get("/tasks/:id/edit", renderEditTask);
router.get("/tasks/:id/delete", deleteTask);
router.post("/tasks/:id/edit", editTask);
router.get("/tasks/:id/toggleDone", toggleDoneTask);

//Personas

router.get("/person", renderPerson);
router.post("/person/add", createPerson);
router.get("/person/:id/edit", renderEditPerson);
router.get("/person/:id/delete", deletePerson);
router.post("/person/:id/edit", editPerson);

export default router;
