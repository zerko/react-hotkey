react-hotkey
============

[![Build Status](https://travis-ci.org/glenjamin/react-hotkey.svg?branch=master)](https://travis-ci.org/glenjamin/react-hotkey)

A simple mixin for application hotkeys.

Provides a react synthetic event to the named event handler, but only when the
component is mounted.

For more info, check out the
[demo](https://rawgit.com/glenjamin/react-hotkey/master/example/index.html)
from the
[example](https://github.com/glenjamin/react-hotkey/tree/master/example)
folder.

Install
-------

    npm install react-hotkey --save


Usage
-----

```js
var hotkey = require('react-hotkey');
// Enable event listening, can be safely called multiple times
hotkey.activate();

React.createClass({
    mixins: [hotkey.Mixin('handleHotkey')],
    handleHotkey: function(e) {
        // receives a React Keyboard Event
        // http://facebook.github.io/react/docs/events.html#keyboard-events
    }
})
```


Acknowledgements
----------------

This approach was extracted from
[react-bootstrap](https://github.com/react-bootstrap/react-bootstrap).


License
-------

MIT
