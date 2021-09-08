
export const USER_INPUT = 'USER_INPUT';
export function saveForm(data){
    console.log("data in action file", data);
    return ({
      type: 'USER_INPUT',
      client : { data }
    })
}