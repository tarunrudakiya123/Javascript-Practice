

        //find max value from below array//



        const arr = [1, 2, 5, 3, 6, 7, 0, 100, 2, 500, -100, 1, 0, 1000]


        function findMax(arr) {
            let i = 0
            let max = 0

            while (i < arr.lenght) {
                if (arr[i] > max) max = arr[i]
                i++
            }
            return max
        }
        console.log(findMax(arr[i]));