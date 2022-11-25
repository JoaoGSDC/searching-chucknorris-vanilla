import { HomeModel } from '../models/HomeModel';
import { HomeController } from '../controllers/HomeController';
import { HomeView } from '../views/home';

const homeModel = new HomeModel();
const homeController = new HomeController(homeModel);
const homeView = new HomeView(homeController);

export const homeRouter = { title: 'Home', render: homeView.template(homeController) };
