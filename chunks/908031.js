"use strict";
n.d(t, { A: () => a });
var r = n(658809),
    i = n(632434);
class a {
    refine(e, t) {
        return (
            e.option.forwardDate &&
                t.forEach((t) => {
                    let n = e.reference.getDateWithAdjustedTimezone();
                    if (t.start.isOnlyTime() && e.reference.instant > t.start.date()) {
                        let n = e.reference.getDateWithAdjustedTimezone(),
                            i = new Date(n);
                        i.setDate(i.getDate() + 1),
                            r.Hq(t.start, i),
                            e.debug(() => {
                                console.log(
                                    `${this.constructor.name} adjusted ${t} time from the ref date (${n}) to the following day (${i})`,
                                );
                            }),
                            t.end &&
                                t.end.isOnlyTime() &&
                                (r.Hq(t.end, i),
                                t.start.date() > t.end.date() && (i.setDate(i.getDate() + 1), r.Hq(t.end, i)));
                    }
                    if (t.start.isOnlyWeekdayComponent() && n > t.start.date()) {
                        let a = t.start.get("weekday") - n.getDay();
                        if (
                            (a <= 0 && (a += 7),
                            (n = (0, i.Gw)(n, { day: a })),
                            (0, r.Hq)(t.start, n),
                            e.debug(() => {
                                console.log(`${this.constructor.name} adjusted ${t} weekday (${t.start})`);
                            }),
                            t.end && t.end.isOnlyWeekdayComponent())
                        ) {
                            let a = t.end.get("weekday") - n.getDay();
                            a <= 0 && (a += 7),
                                (n = (0, i.Gw)(n, { day: a })),
                                (0, r.Hq)(t.end, n),
                                e.debug(() => {
                                    console.log(`${this.constructor.name} adjusted ${t} weekday (${t.end})`);
                                });
                        }
                    }
                    if (t.start.isDateWithUnknownYear() && n > t.start.date())
                        for (let r = 0; r < 3 && n > t.start.date(); r++)
                            t.start.imply("year", t.start.get("year") + 1),
                                e.debug(() => {
                                    console.log(`${this.constructor.name} adjusted ${t} year (${t.start})`);
                                }),
                                t.end &&
                                    !t.end.isCertain("year") &&
                                    (t.end.imply("year", t.end.get("year") + 1),
                                    e.debug(() => {
                                        console.log(`${this.constructor.name} adjusted ${t} month (${t.start})`);
                                    }));
                }),
            t
        );
    }
}
