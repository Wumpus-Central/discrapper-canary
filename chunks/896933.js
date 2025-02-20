function n(e, t, n) {
    (this.locales = e), (this.formats = t), (this.pluralFn = n);
}
function r(e) {
    this.id = e;
}
function i(e, t, n, r, i) {
    (this.id = e), (this.useOrdinal = t), (this.offset = n), (this.options = r), (this.pluralFn = i);
}
function o(e, t, n, r) {
    (this.id = e), (this.offset = t), (this.numberFormat = n), (this.string = r);
}
function a(e, t) {
    (this.id = e), (this.options = t);
}
(t.default = n),
    (n.prototype.compile = function (e) {
        return (this.pluralStack = []), (this.currentPlural = null), (this.pluralNumberFormat = null), this.compileMessage(e);
    }),
    (n.prototype.compileMessage = function (e) {
        if (!(e && 'messageFormatPattern' === e.type)) throw Error('Message AST is not of type: "messageFormatPattern"');
        var t,
            n,
            r,
            i = e.elements,
            o = [];
        for (t = 0, n = i.length; t < n; t += 1)
            switch ((r = i[t]).type) {
                case 'messageTextElement':
                    o.push(this.compileMessageText(r));
                    break;
                case 'argumentElement':
                    o.push(this.compileArgument(r));
                    break;
                default:
                    throw Error('Message element does not have a valid type');
            }
        return o;
    }),
    (n.prototype.compileMessageText = function (e) {
        return this.currentPlural && /(^|[^\\])#/g.test(e.value) ? (this.pluralNumberFormat || (this.pluralNumberFormat = new Intl.NumberFormat(this.locales)), new o(this.currentPlural.id, this.currentPlural.format.offset, this.pluralNumberFormat, e.value)) : e.value.replace(/\\#/g, '#');
    }),
    (n.prototype.compileArgument = function (e) {
        var t = e.format;
        if (!t) return new r(e.id);
        var n,
            o = this.formats,
            s = this.locales,
            l = this.pluralFn;
        switch (t.type) {
            case 'numberFormat':
                return (
                    (n = o.number[t.style]),
                    {
                        id: e.id,
                        format: new Intl.NumberFormat(s, n).format
                    }
                );
            case 'dateFormat':
                return (
                    (n = o.date[t.style]),
                    {
                        id: e.id,
                        format: new Intl.DateTimeFormat(s, n).format
                    }
                );
            case 'timeFormat':
                return (
                    (n = o.time[t.style]),
                    {
                        id: e.id,
                        format: new Intl.DateTimeFormat(s, n).format
                    }
                );
            case 'pluralFormat':
                return (n = this.compileOptions(e)), new i(e.id, t.ordinal, t.offset, n, l);
            case 'selectFormat':
                return (n = this.compileOptions(e)), new a(e.id, n);
            default:
                throw Error('Message element does not have a valid format type');
        }
    }),
    (n.prototype.compileOptions = function (e) {
        var t,
            n,
            r,
            i = e.format,
            o = i.options,
            a = {};
        for (this.pluralStack.push(this.currentPlural), this.currentPlural = 'pluralFormat' === i.type ? e : null, t = 0, n = o.length; t < n; t += 1) a[(r = o[t]).selector] = this.compileMessage(r.value);
        return (this.currentPlural = this.pluralStack.pop()), a;
    }),
    (r.prototype.format = function (e) {
        return e ? ('string' == typeof e ? e : String(e)) : '';
    }),
    (i.prototype.getOption = function (e) {
        var t = this.options;
        return t['=' + e] || t[this.pluralFn(e - this.offset, this.useOrdinal)] || t.other;
    }),
    (o.prototype.format = function (e) {
        var t = this.numberFormat.format(e - this.offset);
        return this.string.replace(/(^|[^\\])#/g, '$1' + t).replace(/\\#/g, '#');
    }),
    (a.prototype.getOption = function (e) {
        var t = this.options;
        return t[e] || t.other;
    });
