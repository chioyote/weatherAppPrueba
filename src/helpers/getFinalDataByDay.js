import { format } from "date-fns";

export const getFinalDataByDay = ( data ) => {
    const finalDaysData = new Promise((resolve, reject) => {
        const newDayData = {}
        data.forEach( (element,index) => {
            const date = format(new Date(element.dt_txt), 'MM/dd/yyyy')
            const {main: {temp_min,temp_max}} = element

            if ( !newDayData[date] ) newDayData[date]= {'temp_min':[],'temp_max':[]}
            newDayData[date]['temp_min'].push(temp_min)
            newDayData[date]['temp_max'].push(temp_max)

            if ( (Object.keys(data).length - 1) == index) resolve(newDayData)
        });
    })

    return finalDaysData
}
