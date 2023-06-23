import React from "react";
export type DatepickerClasses = {
    container: string;
    selectedDay: string;
    rangeDays: string;
    dayItem: string;
    dayLabel: string;
    monthLabel: string;
    dateLabel: string;
    weekendItem: string;
    arrowItem: string;
};
export type DatepickerEvent = [Date | null, Date | null, Date[] | null];
export type DatepickerProps = {
    startDate?: Date;
    endDate?: Date;
    onChange: (d: DatepickerEvent) => void;
    startValue: Date | null;
    endValue: Date | null;
    locale: Locale;
    disabledDates?: Date[];
    classNames?: Partial<DatepickerClasses>;
};
export declare const Datepicker: React.ForwardRefExoticComponent<DatepickerProps & React.RefAttributes<HTMLDivElement>>;
