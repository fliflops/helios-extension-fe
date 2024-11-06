
import { ActionMeta, SingleValue } from 'react-select';
import Select from 'react-select/async'
import {selectType} from './types'
import React from 'react';
import { useGetVehiclesQuery } from '@/lib/redux/api/trucker-clearance.api';


interface APISelectProps {
    value: selectType|null;
    name?: string;
    placeholder?: string;
    onChange: (value: SingleValue<selectType> | null, action: ActionMeta<selectType>) => void;
    isClearable?: boolean;
}

const APISelect: React.FC<APISelectProps> = ({isClearable=true,...props}) => {
    const {data=[], isLoading} = useGetVehiclesQuery()

    const filterData = (value: string) => {
        return data.filter((i: selectType) => i.label.toLowerCase().includes(value.toLowerCase()))
    }

    const loadOptions = (
        value: string , 
        callback: (options: selectType[]) => void) => {
            setTimeout(() => {
                callback(filterData(value))
            },1000)
    }

    const defaultOptions = () => {
        const tempData = [...data];
        if(tempData.length > 100 ) return tempData.splice(0, 100)
        
        return tempData
    }

    return <Select 
        cacheOptions
        loadOptions={loadOptions}
        defaultOptions={defaultOptions()}
        name={props.name}
        onChange={props.onChange}
        value={props.value}
        placeholder={props.placeholder}
        isClearable={isClearable}
        isLoading={isLoading}
        noOptionsMessage={() => 'Plate number is unmaintained, please notify fleet team'}
    />;
}

export default APISelect