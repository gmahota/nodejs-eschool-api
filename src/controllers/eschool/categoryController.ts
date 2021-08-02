import { Request, Response } from "express";

import CategoryService from "../../services/eschool/category";
import SchoolService from "../../services/eschool/school";
import Category from "../../models/eschool/category";

export const get_all_categories = async (
    request: Request,
    response: Response,
) => {
    const data = await CategoryService.getAll();
    return response.status(200).json(data);
};

export const get_category = async (request: Request, response: Response) => {
    const { id } = request.params;

    const data = await CategoryService.getByCode(id);

    if (data) {
        return response.status(200).json(data);
    }
    return response.status(404).json(
        { msg: "no school with that phoneNumber" },
    );
};

export const create_category = async (request: Request, response: Response) => {
    const {
        code,
        description,
        summary,
        status,
        type,
        parentId,
        schoolId
    } = await request.body;

    try {

        let data: Category = {
            code,
            description,
            summary,
            status,
            type
        };

        if (!!parentId) {
            data.parent = await CategoryService.getByCode(parentId)
        }

        if (!!schoolId) {
            data.school = await SchoolService.getById(schoolId)
        }

        data = await CategoryService.create(data);

        return response.status(200).json(data);
    } catch (e) {
        return response.status(404).json(
            { msg: "error to create a school with that i", error: e },
        );
    }
};

export const delete_school = async (request: Request, response: Response) => {
    return response.status(500).json(
        { msg: "not Implemented" },
    );
    const { id } = request.body;

    try {
        //await schoolervice.remove(id);

        return response.send(200).json({ id: id });
    } catch (e) {
        return response.send(404).json(
            { msg: "error to create a order with that i" },
        );
    }
};
