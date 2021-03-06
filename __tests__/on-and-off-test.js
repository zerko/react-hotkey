/*eslint-env browser */
/*global describe, beforeEach, it, expect*/ // test runner globals

var u = require('../test-utils');
var triggerKey = u.triggerKey;

var hotkey, events;

describe('on-and-off', function() {

    beforeEach(function() {
        events = [];
        hotkey = require('../');
        render();
    });

    describe("activate not called", function() {
        it('should not respond to hotkeys', function() {
            triggerKey(document);
            expect(events.length).toBe(0);
        });
        it('should start responding after disable() is called', function() {
            triggerKey(document);
            expect(events.length).toBe(0);
            var result = hotkey.activate();
            // Can be chained
            expect(result).toBe(hotkey);
            triggerKey(document);
            expect(events.length).toBe(1);
        });
    });

    describe("activate has been called", function() {
        beforeEach(function() {
            hotkey.activate();
        });
        it('should respond to hotkeys', function() {
            triggerKey(document);
            expect(events.length).toBe(1);
        });
        it('should stop responding after disable() is called', function() {
            triggerKey(document);
            expect(events.length).toBe(1);
            hotkey.disable();
            triggerKey(document);
            expect(events.length).toBe(1);
        });
    });

});

var React = require('react');
function render() {
    var Component = React.createClass({
        mixins: [hotkey.Mixin('hotkey')],
        hotkey: function(e) {
            events.push(e);
        },
        render: function() {
            return React.DOM.div({}, "div");
        }
    });
    return React.renderComponent(Component(), document.body);
}
