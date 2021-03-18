/*
 * Aydin Cinar <cinar.aydinn@gmail.com>
 * Form Service
 */

const FormList = [
    {
        id: 4,
        component: 'counter'
    },
    {
        id: 5,
        component: 'image-radio'
    },
    {
        id: 6,
        component: 'radio',
    },
    {
        id: 8,
        component: 'detail',
    },
    {
        id: 9,
        component: 'where'
    },
    {
        id: 11,
        component: 'when'
    },
    {
        id: 13,
        component: 'image-upload'
    }
]

export const FormService = {
    getTypeName: (typeId) => {
        return FormList.find(item => item.id == typeId);
    }
}