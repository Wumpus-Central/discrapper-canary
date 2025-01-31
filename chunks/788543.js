n.d(t, { L: () => r });
var i = 'ResizeObserver loop completed with undelivered notifications.',
    r = function () {
        var e;
        'function' == typeof ErrorEvent ? (e = new ErrorEvent('error', { message: i })) : ((e = document.createEvent('Event')).initEvent('error', !1, !1), (e.message = i)), window.dispatchEvent(e);
    };
