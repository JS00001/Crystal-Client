import type { AdminScreenState } from '@/redux/reducers/adminScreen';

import { useDispatch, useSelector } from 'react-redux';

import setAdminScreen from '@/redux/actions/adminScreen';

const useAdminScreen = (): [AdminScreenState, (i: AdminScreenState) => void] => {
	const dispatch = useDispatch();
	const adminScreen = useSelector((state: { adminScreen: AdminScreenState }) => state.adminScreen);

	const updateAdminScreen = (i: AdminScreenState): void => {
		dispatch(setAdminScreen(i));
	};

	return [adminScreen, updateAdminScreen];
};

export default useAdminScreen;
