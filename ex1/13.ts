// This enables module augmentation mode.
import 'date-wizard';

declare module 'date-wizard' {
    const pad: (index: number) => string;

    interface DateDetails {
        hours: number;
        minutes: number;
        seconds: number;
    }
}
