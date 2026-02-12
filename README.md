# Clippy
> Add Clippy or his friends to any website for instant nostalgia.
This project is a remix of [Clippy](https://github.com/pi0/clippyjs).
(Originate from [Clippy.JS](http://smore.com/clippy-js))    

## Demos

Please be patient for first load. It may take some time as agents are loaded one by one.

- [Demo](https://newjerseystyle.github.io/clippyjs/)

![image](https://user-images.githubusercontent.com/5158436/27002340-c221cc06-4df4-11e7-9438-050a3ad8ecde.png)


## Usage

### Browser
For using in raw HTML/JS:

```html
<!-- Add the stylesheet to the head -->
<link rel="stylesheet" type="text/css" href="https://raw.githubusercontent.com/NewJerseyStyle/clippyjs/refs/heads/main/assets/clippy.css">

<!-- Add these scripts to  the bottom of the page -->
<script src="https://unpkg.com/jquery@3.2.1"></script>

<script src="https://raw.githubusercontent.com/NewJerseyStyle/clippyjs/refs/heads/main/docs/clippy.js"></script>

<script type="text/javascript">
clippy.load('Merlin', function(agent){
    // Do anything with the loaded agent
    agent.show();
});
</script>
```

## Actions
All the agent actions are queued and executed by order, so you could stack them.

```javascript
// play a given animation
agent.play('Searching');

// play a random animation
agent.animate();

// get a list of all the animations
agent.animations();
// => ["MoveLeft", "Congratulate", "Hide", "Pleased", "Acknowledge", ...]

// Show text balloon
agent.speak('When all else fails, bind some paper together. My name is Clippy.');

// move to the given point, use animation if available
agent.moveTo(100,100);

// gesture at a given point (if gesture animation is available)
agent.gestureAt(200,200);

// stop the current action in the queue
agent.stopCurrent();

// stop all actions in the queue and go back to idle mode
agent.stop();
```

## Custom CDN / Agents
By default all agents are being served from GitHub CDN (this repo) in order to customize loading base path, 
You can set `window.CLIPPY_CDN` or use fourth argument of `load` function it can be absolute URL or relative to script.
(**path should end with slash /**)

```js
// Using global config
window.CLIPPY_CDN = './agents/'

// Or using fourth argument
clippy.load('Marline', function() {
   // ...
}, undefined, './agents/')
```

# Licence
MIT


## Special Thanks
- The [Clippy](https://github.com/pi0/clippyjs) project by [Pooya](https://github.com/pi0)