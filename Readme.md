# Webpack React Starter Pack

## Static build

Uncomment line 5-8 in index.js

| filename      | size      |
| ------------- | --------- |
| app.css       | 48 bytes  |
| app.bundle.js | 103 KB    |
| index.html    | 272 bytes |

## Dynamic build

Uncomment line 14-23 in index.js

| filename      | size      |              |
| ------------- | --------- | ------------ |
| 0.bundle.js   | 211 B     |              |
| app.css       | 48 bytes  |              |
| app.bundle.js | 2.27 KB   |              |
| 2.bundle.js   | 6.88 KB   | -> react     |
| 3.bundle.js   | 1.86 KB   |              |
| 4.bundle.js   | 1.68 KB   |              |
| 5.bundle.js   | 1.68 KB   |              |
| 6.bundle.js   | 100 KB    | -> react-dom |
| index.html    | 272 bytes |              |
