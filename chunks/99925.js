n.d(t, { T: () => i });
var r = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;
function i(e) {
    var t = {};
    return (
        e.replace(r, function (e) {
            var n = e.length;
            switch (e[0]) {
                case 'G':
                    t.era = 4 === n ? 'long' : 5 === n ? 'narrow' : 'short';
                    break;
                case 'y':
                    t.year = 2 === n ? '2-digit' : 'numeric';
                    break;
                case 'Y':
                case 'u':
                case 'U':
                case 'r':
                    throw RangeError('`Y/u/U/r` (year) patterns are not supported, use `y` instead');
                case 'q':
                case 'Q':
                    throw RangeError('`q/Q` (quarter) patterns are not supported');
                case 'M':
                case 'L':
                    t.month = ['numeric', '2-digit', 'short', 'long', 'narrow'][n - 1];
                    break;
                case 'w':
                case 'W':
                    throw RangeError('`w/W` (week) patterns are not supported');
                case 'd':
                    t.day = ['numeric', '2-digit'][n - 1];
                    break;
                case 'D':
                case 'F':
                case 'g':
                    throw RangeError('`D/F/g` (day) patterns are not supported, use `d` instead');
                case 'E':
                    t.weekday = 4 === n ? 'long' : 5 === n ? 'narrow' : 'short';
                    break;
                case 'e':
                    if (n < 4) throw RangeError('`e..eee` (weekday) patterns are not supported');
                    t.weekday = ['short', 'long', 'narrow', 'short'][n - 4];
                    break;
                case 'c':
                    if (n < 4) throw RangeError('`c..ccc` (weekday) patterns are not supported');
                    t.weekday = ['short', 'long', 'narrow', 'short'][n - 4];
                    break;
                case 'a':
                    t.hour12 = !0;
                    break;
                case 'b':
                case 'B':
                    throw RangeError('`b/B` (period) patterns are not supported, use `a` instead');
                case 'h':
                    (t.hourCycle = 'h12'), (t.hour = ['numeric', '2-digit'][n - 1]);
                    break;
                case 'H':
                    (t.hourCycle = 'h23'), (t.hour = ['numeric', '2-digit'][n - 1]);
                    break;
                case 'K':
                    (t.hourCycle = 'h11'), (t.hour = ['numeric', '2-digit'][n - 1]);
                    break;
                case 'k':
                    (t.hourCycle = 'h24'), (t.hour = ['numeric', '2-digit'][n - 1]);
                    break;
                case 'j':
                case 'J':
                case 'C':
                    throw RangeError('`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead');
                case 'm':
                    t.minute = ['numeric', '2-digit'][n - 1];
                    break;
                case 's':
                    t.second = ['numeric', '2-digit'][n - 1];
                    break;
                case 'S':
                case 'A':
                    throw RangeError('`S/A` (second) patterns are not supported, use `s` instead');
                case 'z':
                    t.timeZoneName = n < 4 ? 'short' : 'long';
                    break;
                case 'Z':
                case 'O':
                case 'v':
                case 'V':
                case 'X':
                case 'x':
                    throw RangeError('`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead');
            }
            return '';
        }),
        t
    );
}
