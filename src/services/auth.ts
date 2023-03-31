interface Response {
    token: string;
    user: {
        name: string;
        email: string;
    };
}

export function singIn() : Promise<Response>{
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({  
                token: 'fhddsfugdanhdfjdf,k31289y34812eb',
                user: {
                    name: 'Gomes Gabriel',
                    email: 'teste@gamil.com'
                }
            })
        }, 2000)
    })
}