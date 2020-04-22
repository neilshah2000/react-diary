import Prompt from '../models/prompt.model';
import _ from 'lodash';
import errorHandler from '../helpers/dbErrorHandler';


const list = (req, res) => {
    Prompt.find((err, prompts) => {
        if (err) {
            return res.status(400).json({
                error: errorHandler.getErrorMessage(err)
            });
        }
        res.json(prompts);
    });
};


export default { list };