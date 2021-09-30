// bucket.js

// Actions

const LOAD = "bucket/LOAD";
const CREATE = 'bucket/CREATE';


const initialState = {
    list: ["흰탄", "녹탄", "보라탄"],
};

// Action Creators
export function createBucket(bucket) {
    return { type: CREATE, bucket: bucket};
}

export function loadBucket(bucket_list) {
    return { type: LOAD, bucket_list: bucket_list};
}

// Reducer
export default function reducer(state = initialState, action = {}) {
switch (action.type) {
case "bucket/CREATE": {
    const new_bucket_list = [...state.list, action.bucket];
    return {list : new_bucket_list};
}
default: 
    return state;
}
}




