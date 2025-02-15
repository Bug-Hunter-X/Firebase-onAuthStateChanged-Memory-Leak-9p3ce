# Firebase onAuthStateChanged Memory Leak

This repository demonstrates a common error in Firebase applications: forgetting to unsubscribe from the `onAuthStateChanged` listener.

## Problem

The `onAuthStateChanged` listener keeps running even when the component that uses it is unmounted.  This can lead to memory leaks and unexpected behavior.

## Solution

To fix this, you must call the `unsubscribe()` function when the listener is no longer needed.  This typically occurs when the component unmounts.