
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link, useForm } from '@inertiajs/react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { FaTrash } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { Phone } from 'lucide-react';


const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Setting',
        href: '/dashboard',
    },
];



export default function Setting({ setting }: any) {

    const { data, setData, post, processing, errors, reset } = useForm({
        title_en: setting.title_en || '',
        title_ar: setting.title_ar || '',
        logo: '',
        favicon: '',
        email: setting.email || '',
        phone: setting.phone || '',
        address: setting.address || '',
        description_en: setting.description_en || '',
        description_ar: setting.description_ar || '',
        currency_en: setting.currency_en || '',
        currency_ar: setting.currency_ar || '',
    });

    const update_setting = (e: any) => {
        e.preventDefault();
        post(route('update.settings'));
    }

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Categories" />
            <div className='px-5'>
                <form onSubmit={update_setting}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* Arabic */}
                        <div>
                            <div className='mb-3'>
                                <Label>Title Ar</Label>
                                <Input type="text" value={data.title_ar} onChange={(e) => setData('title_ar', e.target.value)} />
                                <InputError message={errors.title_ar} />
                            </div>

                            <div className='mb-3'>
                                <Label>Description Ar</Label>
                                <Input type="text" value={data.description_ar} onChange={(e) => setData('description_ar', e.target.value)} />
                                <InputError message={errors.description_ar} />
                            </div>

                            <div className='mb-3'>
                                <Label>Currency Ar</Label>
                                <Input type="text" value={data.currency_ar} onChange={(e) => setData('currency_ar', e.target.value)} />
                                <InputError message={errors.currency_ar} />
                            </div>
                        </div>
                        {/* English */}
                        <div>
                            <div className='mb-3'>
                                <Label>Title En</Label>
                                <Input type="text" value={data.title_en} onChange={(e) => setData('title_en', e.target.value)} />
                                <InputError message={errors.title_en} />
                            </div>

                            <div className='mb-3'>
                                <Label>Description En</Label>
                                <Input type="text" value={data.description_en} onChange={(e) => setData('description_en', e.target.value)} />
                                <InputError message={errors.description_en} />
                            </div>
                            <div className='mb-3'>
                                <Label>Currency En</Label>
                                <Input type="text" value={data.currency_en} onChange={(e) => setData('currency_en', e.target.value)} />
                                <InputError message={errors.currency_en} />
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='mb-3'>
                            <Label>Image</Label>
                            <Input type="file" onChange={(e: any) => setData('logo', e.target.files[0])} />
                            <InputError message={errors.logo} />
                        </div>
                        <div className='mb-3'>
                            <Label>Favicon</Label>
                            <Input type="file" onChange={(e: any) => setData('favicon', e.target.files[0])} />
                            <InputError message={errors.favicon} />
                        </div>


                        <div className='mb-3'>
                            <Label>Email</Label>
                            <Input type="text" value={data.email} onChange={(e) => setData('email', e.target.value)} />
                            <InputError message={errors.email} />
                        </div>

                        <div className='mb-3'>
                            <Label>Phone</Label>
                            <Input type="text" value={data.phone} onChange={(e) => setData('phone', e.target.value)} />
                            <InputError message={errors.phone} />
                        </div>

                        <div className='mb-3'>
                            <Label>Address</Label>
                            <Input type="text" value={data.address} onChange={(e) => setData('address', e.target.value)} />
                            <InputError message={errors.address} />
                        </div>


                        <div>
                            <Button disabled={processing}>
                                {processing ? 'Saving...' : 'Update Settings'}
                            </Button>
                        </div>

                    </div>
                </form>
            </div>
        </AppLayout>
    );
}
