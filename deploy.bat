@echo off
(
echo ------deploying------
npm -v 
echo -----building-----
npm run build

echo -----push code-----

git add .
git commit -m 'deploy'
git push

echo -----over-----
)
pause