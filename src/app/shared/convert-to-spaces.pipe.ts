import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'convertToSpaces'
})

export class ConvertToSpacesPipe implements PipeTransform {
    //transform method should be implemented as we implement PipeTransform interface
    transform(value: string, character: string): string{
        return value.replace(character, ' ');
    }
}