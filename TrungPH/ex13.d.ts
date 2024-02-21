// This enables module augmentation mode.
import 'date-wizard';

declare module 'date-wizard' {
    interface DateDetails {
        hours: number;
        minutes: number,
        seconds: number
    }

    function pad(input: number): string
}
