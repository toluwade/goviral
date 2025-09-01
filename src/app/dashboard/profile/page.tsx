'use client';

import { useState } from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phone: '+1 234 567 8900',
    country: 'United States',
    timezone: 'America/New_York',
    language: 'English',
    company: 'Acme Corp',
    website: 'https://example.com',
    bio: 'Digital marketer focused on social media growth strategies.'
  });

  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  const [preferences, setPreferences] = useState({
    emailNotifications: true,
    orderUpdates: true,
    promotionalEmails: false,
    securityAlerts: true,
    newsletter: false,
    twoFactorAuth: false
  });

  const handleProfileUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Profile updated:', profileData);
    setIsEditing(false);
    alert('Profile updated successfully!');
  };

  const handlePasswordChange = (e: React.FormEvent) => {
    e.preventDefault();
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      alert('New passwords do not match!');
      return;
    }
    console.log('Password change requested');
    alert('Password changed successfully!');
    setPasswordData({ currentPassword: '', newPassword: '', confirmPassword: '' });
  };

  const handlePreferencesUpdate = () => {
    console.log('Preferences updated:', preferences);
    alert('Preferences saved successfully!');
  };

  const accountStats = [
    { label: 'Member Since', value: 'January 2024' },
    { label: 'Total Orders', value: '147' },
    { label: 'Total Spent', value: '₦123,456' },
    { label: 'Account Status', value: 'Verified', color: 'text-green-500' }
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold font-oswald text-foreground mb-2">
            Profile <span className="text-primary">Settings</span>
          </h1>
          <p className="text-muted-foreground">Manage your account information and preferences.</p>
        </div>

        {/* Account Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {accountStats.map((stat, index) => (
            <div key={index} className="bg-secondary/20 border border-border p-4">
              <div className="text-sm text-muted-foreground mb-1">{stat.label}</div>
              <div className={`text-lg font-medium ${stat.color || 'text-foreground'}`}>
                {stat.value}
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Profile Information */}
          <div className="lg:col-span-2 space-y-6">
            {/* Basic Information */}
            <div className="bg-secondary/10 border border-border p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-foreground">Basic Information</h2>
                <Button
                  variant="outline"
                  onClick={() => setIsEditing(!isEditing)}
                  className="border-border text-foreground hover:bg-primary/10"
                >
                  {isEditing ? 'Cancel' : 'Edit Profile'}
                </Button>
              </div>

              <form onSubmit={handleProfileUpdate} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-foreground">First Name</Label>
                    <Input
                      id="firstName"
                      type="text"
                      value={profileData.firstName}
                      onChange={(e) => setProfileData({ ...profileData, firstName: e.target.value })}
                      disabled={!isEditing}
                      className="bg-input border-border text-foreground disabled:opacity-60"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-foreground">Last Name</Label>
                    <Input
                      id="lastName"
                      type="text"
                      value={profileData.lastName}
                      onChange={(e) => setProfileData({ ...profileData, lastName: e.target.value })}
                      disabled={!isEditing}
                      className="bg-input border-border text-foreground disabled:opacity-60"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    value={profileData.email}
                    onChange={(e) => setProfileData({ ...profileData, email: e.target.value })}
                    disabled={!isEditing}
                    className="bg-input border-border text-foreground disabled:opacity-60"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-foreground">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={profileData.phone}
                      onChange={(e) => setProfileData({ ...profileData, phone: e.target.value })}
                      disabled={!isEditing}
                      className="bg-input border-border text-foreground disabled:opacity-60"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="country" className="text-foreground">Country</Label>
                    <Input
                      id="country"
                      type="text"
                      value={profileData.country}
                      onChange={(e) => setProfileData({ ...profileData, country: e.target.value })}
                      disabled={!isEditing}
                      className="bg-input border-border text-foreground disabled:opacity-60"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="timezone" className="text-foreground">Timezone</Label>
                    <select
                      id="timezone"
                      value={profileData.timezone}
                      onChange={(e) => setProfileData({ ...profileData, timezone: e.target.value })}
                      disabled={!isEditing}
                      className="w-full bg-input border border-border text-foreground px-3 py-2 focus:outline-none focus:ring-1 focus:ring-primary disabled:opacity-60"
                    >
                      <option value="America/New_York">Eastern Time (ET)</option>
                      <option value="America/Chicago">Central Time (CT)</option>
                      <option value="America/Denver">Mountain Time (MT)</option>
                      <option value="America/Los_Angeles">Pacific Time (PT)</option>
                      <option value="Europe/London">London (GMT)</option>
                      <option value="Europe/Paris">Paris (CET)</option>
                      <option value="Asia/Tokyo">Tokyo (JST)</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="language" className="text-foreground">Language</Label>
                    <select
                      id="language"
                      value={profileData.language}
                      onChange={(e) => setProfileData({ ...profileData, language: e.target.value })}
                      disabled={!isEditing}
                      className="w-full bg-input border border-border text-foreground px-3 py-2 focus:outline-none focus:ring-1 focus:ring-primary disabled:opacity-60"
                    >
                      <option value="English">English</option>
                      <option value="Spanish">Spanish</option>
                      <option value="French">French</option>
                      <option value="German">German</option>
                      <option value="Portuguese">Portuguese</option>
                      <option value="Chinese">Chinese</option>
                      <option value="Japanese">Japanese</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company" className="text-foreground">Company (Optional)</Label>
                  <Input
                    id="company"
                    type="text"
                    value={profileData.company}
                    onChange={(e) => setProfileData({ ...profileData, company: e.target.value })}
                    disabled={!isEditing}
                    className="bg-input border-border text-foreground disabled:opacity-60"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="website" className="text-foreground">Website (Optional)</Label>
                  <Input
                    id="website"
                    type="url"
                    value={profileData.website}
                    onChange={(e) => setProfileData({ ...profileData, website: e.target.value })}
                    disabled={!isEditing}
                    className="bg-input border-border text-foreground disabled:opacity-60"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="bio" className="text-foreground">Bio (Optional)</Label>
                  <textarea
                    id="bio"
                    rows={3}
                    value={profileData.bio}
                    onChange={(e) => setProfileData({ ...profileData, bio: e.target.value })}
                    disabled={!isEditing}
                    className="w-full bg-input border border-border text-foreground px-3 py-2 focus:outline-none focus:ring-1 focus:ring-primary resize-none disabled:opacity-60"
                  />
                </div>

                {isEditing && (
                  <div className="flex justify-end">
                    <Button type="submit" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                      Save Changes
                    </Button>
                  </div>
                )}
              </form>
            </div>

            {/* Change Password */}
            <div className="bg-secondary/10 border border-border p-6">
              <h2 className="text-xl font-bold text-foreground mb-6">Change Password</h2>

              <form onSubmit={handlePasswordChange} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="currentPassword" className="text-foreground">Current Password</Label>
                  <Input
                    id="currentPassword"
                    type="password"
                    value={passwordData.currentPassword}
                    onChange={(e) => setPasswordData({ ...passwordData, currentPassword: e.target.value })}
                    required
                    className="bg-input border-border text-foreground"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="newPassword" className="text-foreground">New Password</Label>
                  <Input
                    id="newPassword"
                    type="password"
                    value={passwordData.newPassword}
                    onChange={(e) => setPasswordData({ ...passwordData, newPassword: e.target.value })}
                    required
                    className="bg-input border-border text-foreground"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="confirmPassword" className="text-foreground">Confirm New Password</Label>
                  <Input
                    id="confirmPassword"
                    type="password"
                    value={passwordData.confirmPassword}
                    onChange={(e) => setPasswordData({ ...passwordData, confirmPassword: e.target.value })}
                    required
                    className="bg-input border-border text-foreground"
                  />
                </div>

                <div className="flex justify-end">
                  <Button type="submit" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                    Change Password
                  </Button>
                </div>
              </form>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Profile Picture */}
            <div className="bg-secondary/10 border border-border p-6">
              <h3 className="text-lg font-medium text-foreground mb-4">Profile Picture</h3>
              <div className="flex flex-col items-center">
                <div className="w-32 h-32 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                  <span className="text-4xl font-bold text-primary">JD</span>
                </div>
                <Button variant="outline" className="border-border text-foreground hover:bg-primary/10">
                  Upload Photo
                </Button>
                <p className="text-xs text-muted-foreground mt-2 text-center">
                  JPG, PNG or GIF. Max size 2MB.
                </p>
              </div>
            </div>

            {/* Notification Preferences */}
            <div className="bg-secondary/10 border border-border p-6">
              <h3 className="text-lg font-medium text-foreground mb-4">Notification Preferences</h3>
              <div className="space-y-3">
                <label className="flex items-center justify-between cursor-pointer">
                  <span className="text-sm text-foreground">Email Notifications</span>
                  <input
                    type="checkbox"
                    checked={preferences.emailNotifications}
                    onChange={(e) => setPreferences({ ...preferences, emailNotifications: e.target.checked })}
                    className="w-4 h-4 text-primary"
                  />
                </label>
                <label className="flex items-center justify-between cursor-pointer">
                  <span className="text-sm text-foreground">Order Updates</span>
                  <input
                    type="checkbox"
                    checked={preferences.orderUpdates}
                    onChange={(e) => setPreferences({ ...preferences, orderUpdates: e.target.checked })}
                    className="w-4 h-4 text-primary"
                  />
                </label>
                <label className="flex items-center justify-between cursor-pointer">
                  <span className="text-sm text-foreground">Promotional Emails</span>
                  <input
                    type="checkbox"
                    checked={preferences.promotionalEmails}
                    onChange={(e) => setPreferences({ ...preferences, promotionalEmails: e.target.checked })}
                    className="w-4 h-4 text-primary"
                  />
                </label>
                <label className="flex items-center justify-between cursor-pointer">
                  <span className="text-sm text-foreground">Security Alerts</span>
                  <input
                    type="checkbox"
                    checked={preferences.securityAlerts}
                    onChange={(e) => setPreferences({ ...preferences, securityAlerts: e.target.checked })}
                    className="w-4 h-4 text-primary"
                  />
                </label>
                <label className="flex items-center justify-between cursor-pointer">
                  <span className="text-sm text-foreground">Newsletter</span>
                  <input
                    type="checkbox"
                    checked={preferences.newsletter}
                    onChange={(e) => setPreferences({ ...preferences, newsletter: e.target.checked })}
                    className="w-4 h-4 text-primary"
                  />
                </label>
              </div>
              <Button 
                onClick={handlePreferencesUpdate}
                className="w-full mt-4 bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                Save Preferences
              </Button>
            </div>

            {/* Security Settings */}
            <div className="bg-secondary/10 border border-border p-6">
              <h3 className="text-lg font-medium text-foreground mb-4">Security Settings</h3>
              <div className="space-y-4">
                <div>
                  <label className="flex items-center justify-between mb-2">
                    <span className="text-sm text-foreground">Two-Factor Authentication</span>
                    <input
                      type="checkbox"
                      checked={preferences.twoFactorAuth}
                      onChange={(e) => setPreferences({ ...preferences, twoFactorAuth: e.target.checked })}
                      className="w-4 h-4 text-primary"
                    />
                  </label>
                  <p className="text-xs text-muted-foreground">
                    Add an extra layer of security to your account
                  </p>
                </div>
                
                <div className="pt-4 border-t border-border">
                  <h4 className="text-sm font-medium text-foreground mb-2">Active Sessions</h4>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-muted-foreground">Chrome - Windows</span>
                      <span className="text-green-500">Current</span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-muted-foreground">Safari - iPhone</span>
                      <button className="text-red-500 hover:text-red-400">Revoke</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Danger Zone */}
            <div className="bg-red-500/10 border border-red-500/20 p-6">
              <h3 className="text-lg font-medium text-foreground mb-4">Danger Zone</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Once you delete your account, there is no going back. Please be certain.
              </p>
              <Button 
                variant="outline" 
                className="w-full border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
              >
                Delete Account
              </Button>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}