import APISelect from '../select/APISelect';
import {  FieldValues, UseControllerProps, useController } from 'react-hook-form';
import { FormControl, FormItem, FormLabel} from '../ui/form';

type FormAPISelectProps<T extends FieldValues> = UseControllerProps<T> & {
    label: string;
    placeholder?: string;
} 

function FormAPISelect <T extends FieldValues>({label,placeholder,...props}: FormAPISelectProps<T>) {
    const {field,fieldState} = useController<T>({
        ...props
    })  
    
    return <FormItem className="flex flex-col gap-0">
            <FormLabel className={`font-semibold font-sans ${fieldState.error ? 'text-red-500' : ''}`}>
                {label}
            </FormLabel>
            <FormControl>
                <APISelect
                    value={field.value}
                    placeholder={placeholder}
                    onChange={(e) => field.onChange(e)}
                />
                
                </FormControl>
                {
                    fieldState.error ? 
                    <div className='text-xs font-sans text-red-500'>{fieldState.error.message}</div> : null
                }
        </FormItem>
}

export default FormAPISelect