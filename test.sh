if [ $(stat -f%z index.js)  -eq 15000 ]
then
	echo "index.js is exactly fifteen kilos"
	exit 0
else
	echo "!!index.js is not exactly fifteen kilos!!"
	exit 1
fi