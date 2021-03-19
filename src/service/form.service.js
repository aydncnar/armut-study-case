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
        component: 'free-text-questions',
    },
    {
        id: 9,
        component: 'location'
    },
    {
        id: 11,
        component: 'time'
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