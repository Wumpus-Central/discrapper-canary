var i, r;
Object.defineProperty(e, '__esModule', { value: !0 }), (e.ICalAlarmType = void 0);
let n = a(141716);
((r = i = e.ICalAlarmType || (e.ICalAlarmType = {})).display = 'display'),
    (r.audio = 'audio'),
    (e.default = class {
        constructor(t, e) {
            if (
                ((this.data = {
                    type: null,
                    trigger: null,
                    repeat: null,
                    interval: null,
                    attach: null,
                    description: null,
                    x: []
                }),
                (this.event = e),
                !e)
            )
                throw Error('`event` option required!');
            void 0 !== t.type && this.type(t.type), void 0 !== t.trigger && this.trigger(t.trigger), void 0 !== t.triggerBefore && this.triggerBefore(t.triggerBefore), void 0 !== t.triggerAfter && this.triggerAfter(t.triggerAfter), void 0 !== t.repeat && this.repeat(t.repeat), void 0 !== t.interval && this.interval(t.interval), void 0 !== t.attach && this.attach(t.attach), void 0 !== t.description && this.description(t.description), void 0 !== t.x && this.x(t.x);
        }
        type(t) {
            if (void 0 === t) return this.data.type;
            if (!t) return (this.data.type = null), this;
            if (!Object.keys(i).includes(t)) throw Error('`type` is not correct, must be either `display` or `audio`!');
            return (this.data.type = t), this;
        }
        trigger(t) {
            if (void 0 === t && 'number' == typeof this.data.trigger) return -1 * this.data.trigger;
            if (void 0 === t && this.data.trigger) return this.data.trigger;
            if (void 0 === t) return null;
            if (t)
                if ('number' == typeof t && isFinite(t)) this.data.trigger = -1 * t;
                else if ('number' == typeof t) throw Error('`trigger` is not correct, must be a finite number or a supported date!');
                else this.data.trigger = (0, n.checkDate)(t, 'trigger');
            else this.data.trigger = null;
            return this;
        }
        triggerAfter(t) {
            return void 0 === t ? this.data.trigger : this.trigger('number' == typeof t ? -1 * t : t);
        }
        triggerBefore(t) {
            return void 0 === t ? this.trigger() : this.trigger(t);
        }
        repeat(t) {
            if (void 0 === t) return this.data.repeat;
            if (!t) return (this.data.repeat = null), this;
            if ('number' != typeof t || !isFinite(t)) throw Error('`repeat` is not correct, must be numeric!');
            return (this.data.repeat = t), this;
        }
        interval(t) {
            if (void 0 === t) return this.data.interval || null;
            if (!t) return (this.data.interval = null), this;
            if ('number' != typeof t || !isFinite(t)) throw Error('`interval` is not correct, must be numeric!');
            return (this.data.interval = t), this;
        }
        attach(t) {
            if (void 0 === t) return this.data.attach;
            if (!t) return (this.data.attach = null), this;
            let e = null;
            if ('string' == typeof t)
                e = {
                    uri: t,
                    mime: null
                };
            else if ('object' == typeof t)
                e = {
                    uri: t.uri,
                    mime: t.mime || null
                };
            else throw Error('`attachment` needs to be a valid formed string or an object. See https://sebbo2002.github.io/ical-generator/develop/reference/classes/icalalarm.html#attach');
            if (!e.uri) throw Error('`attach.uri` is empty!');
            return (
                (this.data.attach = {
                    uri: e.uri,
                    mime: e.mime
                }),
                this
            );
        }
        description(t) {
            return void 0 === t ? this.data.description : (t ? (this.data.description = t) : (this.data.description = null), this);
        }
        x(t, e) {
            if (void 0 === t) return (0, n.addOrGetCustomAttributes)(this.data);
            if ('string' == typeof t && 'string' == typeof e) (0, n.addOrGetCustomAttributes)(this.data, t, e);
            else if ('object' == typeof t) (0, n.addOrGetCustomAttributes)(this.data, t);
            else throw Error('Either key or value is not a string!');
            return this;
        }
        toJSON() {
            let t = this.trigger();
            return Object.assign({}, this.data, {
                trigger: 'number' == typeof t ? t : (0, n.toJSON)(t),
                x: this.x()
            });
        }
        toString() {
            let t = 'BEGIN:VALARM\r\n';
            if (!this.data.type) throw Error('No value for `type` in ICalAlarm given!');
            if (!this.data.trigger) throw Error('No value for `trigger` in ICalAlarm given!');
            if (((t += 'ACTION:' + this.data.type.toUpperCase() + '\r\n'), 'number' == typeof this.data.trigger && this.data.trigger > 0 ? (t += 'TRIGGER;RELATED=END:' + (0, n.toDurationString)(this.data.trigger) + '\r\n') : 'number' == typeof this.data.trigger ? (t += 'TRIGGER:' + (0, n.toDurationString)(this.data.trigger) + '\r\n') : (t += 'TRIGGER;VALUE=DATE-TIME:' + (0, n.formatDate)(this.event.timezone(), this.data.trigger) + '\r\n'), this.data.repeat && !this.data.interval)) throw Error('No value for `interval` in ICalAlarm given, but required for `repeat`!');
            if ((this.data.repeat && (t += 'REPEAT:' + this.data.repeat + '\r\n'), this.data.interval && !this.data.repeat)) throw Error('No value for `repeat` in ICalAlarm given, but required for `interval`!');
            return this.data.interval && (t += 'DURATION:' + (0, n.toDurationString)(this.data.interval) + '\r\n'), 'audio' === this.data.type && this.data.attach && this.data.attach.mime ? (t += 'ATTACH;FMTTYPE=' + this.data.attach.mime + ':' + this.data.attach.uri + '\r\n') : 'audio' === this.data.type && this.data.attach ? (t += 'ATTACH;VALUE=URI:' + this.data.attach.uri + '\r\n') : 'audio' === this.data.type && (t += 'ATTACH;VALUE=URI:Basso\r\n'), 'display' === this.data.type && this.data.description ? (t += 'DESCRIPTION:' + (0, n.escape)(this.data.description) + '\r\n') : 'display' === this.data.type && (t += 'DESCRIPTION:' + (0, n.escape)(this.event.summary()) + '\r\n'), (t += (0, n.generateCustomAttributes)(this.data)), (t += 'END:VALARM\r\n');
        }
    });
