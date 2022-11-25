import { JokesModel } from '../models/JokesModel';
import { JokesController } from '../controllers/JokesController';
import { JokesView } from '../views/jokes';

const jokesModel = new JokesModel();
const jokesController = new JokesController(jokesModel);
const jokesView = new JokesView(jokesController);

export const jokesRouter = { title: 'Chuck Norris', render: jokesView.template(jokesController) };
