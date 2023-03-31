var arr = [1, 2, 4, 5, 6, 7, 8]

        start = 0;
        x = 5;

        end = arr.length - 1;

        while (start <= end) {

            mid = Math.floor(start + end / 2); //3


            if (arr[mid] === x) {

                console.log(arr[mid]);

            }
            start++

        }

// --------------------------------------------------------------------------------------------------------------//



        var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

        let x = 12;
        start = 0;

        end = arr.length - 1;

        while (start <= end) {

            mid = Math.floor((start + end) / 2);

            if (arr[mid] == x) {
                console.log(arr[mid])
            }
            start++
        }