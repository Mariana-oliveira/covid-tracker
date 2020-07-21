export const sortData = (data, sortBy) => {
    const sortedData = [...data];

    return sortedData.sort((a,b) => ((a[sortBy] > b[sortBy] ? -1 : 1)));
}