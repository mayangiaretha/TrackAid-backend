import express from 'express';
import router from './routes'

const app = express()
app.use(express.json());
app.use(router)

app.use((req, res)=> {
    return res.status(404).json({
        message: 'Resource not found',
        status: false,
    })
})
const { PORT } = process.env || 5000;
app.listen(PORT, () =>
    console.log(`server running on port:http://localhost:${PORT}`)
);

export default app;
