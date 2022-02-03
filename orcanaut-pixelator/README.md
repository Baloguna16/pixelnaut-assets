# Pixelnaut Canvas Generator

This is a react app for generating animated canvasses using .png files.

## How it works

The .png files are just 10-frame images. The canvas component counts frames then
redraws the canvas for each frame. Within the function, `draw()`, the .png file is
moved along its frames.

The .png frames do the work of animating the sprite. Other than changing the frame,
the canvas doesn't do any of the animation work (no offset changes).

## Some changes from original

Wallet connect was mostly stripped out or commented because this app focuses on canvas generation.
Still, along the way, you'll find nods to where the app would connect to your wallet
and read for NFTs.

## Other notes

This demo uses Bootstrap for a faster build, but the canvas component should work
pretty much the same way with a more production caliber framework like Material UI.

The outer folder '../pixelnaut-sprite-assets' is the same content as './public/assets'.
The former is for easy reference while the latter is specifically for the react app.

Huge shout out to FuzzyYeti (TW: fzzyyti) who was an equal partner in making this possible.
