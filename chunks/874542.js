a.d(t, { Z: () => n });
var i = a(799761);
let n = {
    ordinalNumber: function (e, t) {
        var a,
            i = Number(e),
            n = null == t ? void 0 : t.unit;
        return i + ('year' === n || 'month' === n ? 'ος' : 'week' === n || 'dayOfYear' === n || 'day' === n || 'hour' === n || 'date' === n ? 'η' : 'ο');
    },
    era: (0, i.Z)({
        values: {
            narrow: ['πΧ', 'μΧ'],
            abbreviated: ['π.Χ.', 'μ.Χ.'],
            wide: ['προ Χριστού', 'μετά Χριστόν']
        },
        defaultWidth: 'wide'
    }),
    quarter: (0, i.Z)({
        values: {
            narrow: ['1', '2', '3', '4'],
            abbreviated: ['Τ1', 'Τ2', 'Τ3', 'Τ4'],
            wide: ['1ο τρίμηνο', '2ο τρίμηνο', '3ο τρίμηνο', '4ο τρίμηνο']
        },
        defaultWidth: 'wide',
        argumentCallback: function (e) {
            return e - 1;
        }
    }),
    month: (0, i.Z)({
        values: {
            narrow: ['Ι', 'Φ', 'Μ', 'Α', 'Μ', 'Ι', 'Ι', 'Α', 'Σ', 'Ο', 'Ν', 'Δ'],
            abbreviated: ['Ιαν', 'Φεβ', 'Μάρ', 'Απρ', 'Μάι', 'Ιούν', 'Ιούλ', 'Αύγ', 'Σεπ', 'Οκτ', 'Νοέ', 'Δεκ'],
            wide: ['Ιανουάριος', 'Φεβρουάριος', 'Μάρτιος', 'Απρίλιος', 'Μάιος', 'Ιούνιος', 'Ιούλιος', 'Αύγουστος', 'Σεπτέμβριος', 'Οκτώβριος', 'Νοέμβριος', 'Δεκέμβριος']
        },
        defaultWidth: 'wide',
        formattingValues: {
            narrow: ['Ι', 'Φ', 'Μ', 'Α', 'Μ', 'Ι', 'Ι', 'Α', 'Σ', 'Ο', 'Ν', 'Δ'],
            abbreviated: ['Ιαν', 'Φεβ', 'Μαρ', 'Απρ', 'Μαΐ', 'Ιουν', 'Ιουλ', 'Αυγ', 'Σεπ', 'Οκτ', 'Νοε', 'Δεκ'],
            wide: ['Ιανουαρίου', 'Φεβρουαρίου', 'Μαρτίου', 'Απριλίου', 'Μαΐου', 'Ιουνίου', 'Ιουλίου', 'Αυγούστου', 'Σεπτεμβρίου', 'Οκτωβρίου', 'Νοεμβρίου', 'Δεκεμβρίου']
        },
        defaultFormattingWidth: 'wide'
    }),
    day: (0, i.Z)({
        values: {
            narrow: ['Κ', 'Δ', 'T', 'Τ', 'Π', 'Π', 'Σ'],
            short: ['Κυ', 'Δε', 'Τρ', 'Τε', 'Πέ', 'Πα', 'Σά'],
            abbreviated: ['Κυρ', 'Δευ', 'Τρί', 'Τετ', 'Πέμ', 'Παρ', 'Σάβ'],
            wide: ['Κυριακή', 'Δευτέρα', 'Τρίτη', 'Τετάρτη', 'Πέμπτη', 'Παρασκευή', 'Σάββατο']
        },
        defaultWidth: 'wide'
    }),
    dayPeriod: (0, i.Z)({
        values: {
            narrow: {
                am: 'πμ',
                pm: 'μμ',
                midnight: 'μεσάνυχτα',
                noon: 'μεσημέρι',
                morning: 'πρωί',
                afternoon: 'απόγευμα',
                evening: 'βράδυ',
                night: 'νύχτα'
            },
            abbreviated: {
                am: 'π.μ.',
                pm: 'μ.μ.',
                midnight: 'μεσάνυχτα',
                noon: 'μεσημέρι',
                morning: 'πρωί',
                afternoon: 'απόγευμα',
                evening: 'βράδυ',
                night: 'νύχτα'
            },
            wide: {
                am: 'π.μ.',
                pm: 'μ.μ.',
                midnight: 'μεσάνυχτα',
                noon: 'μεσημέρι',
                morning: 'πρωί',
                afternoon: 'απόγευμα',
                evening: 'βράδυ',
                night: 'νύχτα'
            }
        },
        defaultWidth: 'wide'
    })
};
