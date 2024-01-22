// module-augmentations/date-wizard/index.d.ts

// This enables module augmentation mode.
import 'date-wizard';

declare module 'date-wizard' {
    function pad(time: number): string;
    interface DateDetails {
        hours: number;
        minutes: number;
        seconds: number;
    }
}
