export const shuffleCard = (data: any) => {
  let array = data.map((e: any) => e.id);
  let left = [];
  let right = [];
  for (let i = array.length - 1; i > 5; i--) {
    left.push(array[i]);
  }
  for (let i = left.length - 1; i > 5; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [left[i], left[j]] = [left[j], left[i]]; // Swap elements
  }
  for (let i = 5; i >= 0; i--) {
    right.push(array[i]);
  }
  for (let i = 5; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [right[i], right[j]] = [right[j], right[i]]; // Swap elements
  }
  const combineArray = [...left, ...right];
  let result:any = [];
  combineArray.forEach((ids: any) => {
    data.forEach((oldIds: any) => {
      if (oldIds.id == ids) {
        result.push(oldIds);
      }
    });
  });
  return result;
};
