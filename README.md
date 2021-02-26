# file-saver-es

Utility for download files, based on TypeScript.
Supported browsers:

- Chrome
- Internet Explorer
- Edge
- Safari
- Firefox
- Opera

## Getting started

Step 1. Build package.

```PowerShell
    npm run build
```

Step 2. Publish package or use npm-link.

Step 3. Install package.

```PowerShell
    npm i file-saver-ts
```

Step 4. Added saveFilesAs fuction at youre code:

Example:

```typescript
    import { saveFilesAs } from 'file-saver-ts';

    ...
    function test(){
        const blob = new Blob(['Hello world'], {type: 'text/plain'});
        const name = 'hello-world.txt';

        downloadFile(blob, name);
    }
```
