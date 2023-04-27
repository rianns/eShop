import { db } from "../firebase";
import {
	addDoc,
	collection,
	deleteDoc,
	doc,
	getDoc,
	getDocs,
	updateDoc,
	increment,
	deleteField,
} from "firebase/firestore";

export const getAllProducts = async () => {
	const querySnapshot = await getDocs(collection(db, "photos"));

	const data = querySnapshot.docs.map((doc) => {
		const id = doc.id;
		const restOfData = doc.data();
		return { id, ...restOfData };
	});

	return data;
};

export const getProductById = async (id) => {
	const docRef = doc(db, "photos", id);
	const docSnap = await getDoc(docRef);

	// console.log(docSnap.exists());
	// console.log(docSnap.data());

	if (docSnap.exists()) {
		return { id: docSnap.id, ...docSnap.data() };
	} else {
		throw new Error("Doc not found");
	}
};

export const updateItems = async (id, objData) => {
	const docRef = doc(db, "photos", id);
	await updateDoc(docRef, objData);
};

export const updateStock = async (id, num) => {
	console.log(num);
	const docRef = doc(db, "photos", id);
	await updateDoc(docRef, { qtyAdded: increment(num) });
};

// deleting doc field when amount of qtyAdded is checked out of the cart
export const deleteQtyAdded = async (id) => {
	const docRef = doc(db, "photos", id);
	const delData = { qtyAdded: deleteField() };
	await updateDoc(docRef, delData);
};
