const arr=[ -3, 8, 7, 6, 5, -4, 3, 2, 1 ]
  function sort(arr){
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i]>arr[j]){
                const temp=arr[i]
                arr[i]=arr[j]
                arr[j]=temp
            }
        }
    }
    return arr
  }
  console.log(sort(arr));