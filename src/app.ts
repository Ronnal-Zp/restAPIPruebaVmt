import express from "express";
import { UserRoutes } from "./users/application/routes";
import { envs } from "./envs";

const app = express();

app.use('/api/users', UserRoutes.routes())

app.listen(envs.PORT, () => {                                         
    console.log(`Server up in port ${envs.PORT}`);
})

